/**
 * NextMerch Global - Authentication & Portal Session Controller
 */
const NextAuth = (function () {
    "use strict";

    let currentUserSession = null;

    return {
        login: async function (email, password) {
            if (!email || !password) {
                return { success: false, error: "Credentials are required." };
            }

            try {
                // Production-ready submission logic safely routed to the python endpoint
                const response = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok && data.token) {
                    currentUserSession = data.user;
                    localStorage.setItem("nm_session_token", data.token);
                    return { success: true, user: data.user };
                } else {
                    return { success: false, error: data.message || "Invalid credentials." };
                }
            } catch (err) {
                return { success: false, error: "Network error occurred during authentication." };
            }
        },

        logout: function () {
            currentUserSession = null;
            localStorage.removeItem("nm_session_token");
            window.location.href = "/index.html";
        },

        getSession: function () {
            return currentUserSession;
        },

        isAuthenticated: function () {
            return !!localStorage.getItem("nm_session_token");
        }
    };
})();
