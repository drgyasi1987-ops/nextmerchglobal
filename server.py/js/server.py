#!/usr/bin/env python3
# server.py
"""
Minimal static file server for hosting the NextMerch Global Ltd. website.

Usage:
    python3 server.py            (serves on http://localhost:8000)
    python3 server.py 3000       (serves on http://localhost:3000)

Requires only the Python standard library — no installs needed.
Place this file in the same folder as index.html, then run it and
open the printed URL in your browser.
"""
import http.server
import socketserver
import sys
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

# Serve from the folder this script lives in, so it works
# regardless of the directory you launch it from.
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent aggressive browser caching while you edit the site
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, format, *args):
        # Slightly cleaner console output
        print(f"[{self.address_string()}] {format % args}")

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving NextMerch Global Ltd. at http://localhost:{PORT}")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
