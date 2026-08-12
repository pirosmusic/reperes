## Configured Project Profiles

The profile activation rule is explicit: use this branch only when `graphify.yaml`, `graphify.yml`, `.graphify/config.yaml`, or `.graphify/config.yml` exists, or the invocation includes `--config` or `--profile`. If none is active, fallback to the existing non-profile workflow.

Configured profile workflow:
1. Keep the TypeScript runtime proof in `.graphify/.graphify_runtime.json`; it must contain `"runtime": "typescript"`.
2. Run `project-config` to normalize config/profile artifacts.
3. Run the `configured-dataprep` runtime command to produce `.graphify/profile/profile-state.json`, semantic detection, and registry extraction.
4. Run the `profile-prompt` runtime command and use that prompt for assistant semantic extraction.
5. Run base extraction validation, then the `profile-validate-extraction` runtime command.
6. Merge `.graphify/profile/registry-extraction.json` with AST and semantic extraction, then finalize through the existing build/report/export runtime commands.
7. Run the `profile-report` runtime command to write `.graphify/profile/profile-report.md`.
8. If ontology discovery is requested, run `profile-discovery-sample`, use its prompt to produce `.graphify/ontology/discovery/proposals.json`, then run `profile-discovery-diff`; present the diff/report to the user and wait for approval before any apply step.
9. If `dataprep.image_analysis.enabled` is true, use `image-calibration-samples` and `image-calibration-replay` for calibration. The assistant may propose labels or rule changes, but TypeScript replay owns acceptance.
10. For batch image analysis, use `image-batch-export` and `image-batch-import`. A deep-pass export is allowed only when project-owned routing rules declare `decision: accept_matrix`; do not make production route decisions in the assistant.
11. If the profile declares `outputs.ontology.enabled: true`, run `ontology-output` to compile `.graphify/ontology/` after validated extraction exists.

## Ontology Lifecycle Patches

Use ontology lifecycle commands only when profile artifacts and `.graphify/ontology/` outputs already exist. Review decisions are patches against project-owned sources, not direct graph mutations. Assistants may propose patches, but must validate before dry-run and dry-run before write.

- Validate with `ontology-patch-validate --profile-state .graphify/profile/profile-state.json --patch patch.json`.
- Preview with `ontology-patch-apply --profile-state .graphify/profile/profile-state.json --patch patch.json --dry-run`.
- Write with `ontology-patch-apply --profile-state .graphify/profile/profile-state.json --patch patch.json --write` only after explicit user approval.
- Always warn if the Git worktree is dirty before proposing a write apply.
- Agents must not edit `.graphify/graph.json` or derived `.graphify/ontology/*.json` directly.
- The default MCP server stays read-only; mutation tools require explicit `graphify ontology serve --config graphify.yaml --write`.
- Use the Public Domain Mystery Sagas repo as an external UAT and UI-mock corpus only; do not add its real corpus as Graphify package fixtures.

Do not add embeddings, databases, a resident LLM backend, or a forked OCR/PDF pipeline for this branch.

