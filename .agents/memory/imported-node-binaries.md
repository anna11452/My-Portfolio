---
name: Imported Node binary permissions
description: Imported projects may contain non-executable npm bin launchers even when dependencies are present.
---

Imported Node projects can fail with “Permission denied” when an npm script invokes a checked-in or preloaded binary whose execute bit was lost during import.

**Why:** The dependency installation can look complete while the shell cannot launch tools such as Vite.

**How to apply:** If an npm script reports permission denied for a local binary, inspect its mode and restore execute permission before changing the project’s framework or dependency setup.