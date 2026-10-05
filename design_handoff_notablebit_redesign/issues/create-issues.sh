#!/usr/bin/env bash
# Requires GitHub CLI: gh auth login. Run from the repo root: bash design_handoff_notablebit_redesign/issues/create-issues.sh
set -e
cd "$(dirname "$0")"
for f in [0-9]*.md; do
  title=$(head -1 "$f" | sed "s/^# //")
  labels=$(sed -n "2p" "$f" | sed "s/^labels: //")
  tail -n +4 "$f" > /tmp/issue-body.md
  gh issue create --title "$title" --label "$labels" --body-file /tmp/issue-body.md || gh issue create --title "$title" --body-file /tmp/issue-body.md
done
