---
layout: base
title: About Me
---

<div class="font-mono">
  <h1 class="text-3xl font-bold mb-6 text-terminal-accent">
    <span class="text-terminal-prompt">$</span> cat about-me.txt
  </h1>
  
  <p class="mb-8">
    A growth engineer that is constantly asking "why?" and then doing whatever is necessary to answer that question. Especially interested in collecting data and building tools to help dig into the data in order to better understand the customer acquisition funnel.
  </p>

  <h2 class="text-2xl font-bold mb-4 text-terminal-accent">
    <span class="text-terminal-prompt">$</span> ls experience/
  </h2>

  <div class="space-y-8">
    {% for exp in collections.experience %}
    <div class="border border-terminal-text p-6 rounded">
      <h3 class="text-xl font-bold text-terminal-accent">{{ exp.data.company }}</h3>
      <h4 class="text-lg text-terminal-prompt">{{ exp.data.title }}</h4>
      <p class="text-sm mt-1 opacity-70">{{ exp.data.startDate | date("MMM yyyy") }} - {% if exp.data.endDate %}{{ exp.data.endDate | date("MMM yyyy") }}{% else %}Present{% endif %}</p>
      <div class="mt-4 prose prose-invert max-w-none">
        {{ exp.content | safe }}
      </div>
    </div>
    {% endfor %}
  </div>
</div>
