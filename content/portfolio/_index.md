---
title: "Portfolio"
date: 2025-05-10
---

<div class="photo-grid">
{{ range (readDir "static/images") }}
  <a href="/images/{{ .Name | urlize }}"><img src="/images/{{ .Name }}" alt="{{ .Name | humanize }}" /></a>
{{ end }}
</div>