---
layout: page
title: 分类
nav: true
---

<div class="tag-box">
{% assign tags_list = site.categories %}  
  {% if tags_list.first[0] == null %}
    {% for tag in tags_list %} 
      <a href="#{{ tag }}">{{ tag }} <span>{{ site.tags[tag].size }}</span></a>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %} 
      <a href="#{{ tag[0] }}">{{ tag[0] }} <span>{{ tag[1].size }}</span></a>
    {% endfor %}
  {% endif %}
{% assign tags_list = nil %}
</div>


{% for category in site.categories %}
  <li><a id="{{ category[0] }}" name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
         {% if post.url %} <li><a href="{{ post.url }}">{{ post.title }}</a></li> {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}