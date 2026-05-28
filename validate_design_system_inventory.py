#!/usr/bin/env python3
"""
SlideScript Codebase Validator - Design Token & Inventory Enforcer
Mandated by the Web Application Design System & Premium UI Skill guidelines.
Checks for hardcoded hex/rgb colors, custom pixels, dynamic icon mappings, and asset compliance.
"""

import os
import re
import sys

# Define target workspace files
HTML_FILE = "index.html"
CSS_FILE = "styles.css"
JS_FILE = "app.js"

errors = []
warnings = []

def check_html():
  if not os.path.exists(HTML_FILE):
    errors.append(f"Missing essential HTML file: {HTML_FILE}")
    return
    
  with open(HTML_FILE, 'r', encoding='utf-8') as f:
    content = f.read()
    
  # Check for semantic HTML elements
  if "<main" not in content or "</main>" not in content:
    errors.append("HTML is missing semantic <main> tags.")
  if "<header" not in content or "</header>" not in content:
    errors.append("HTML is missing semantic <header> tags.")
  if "<footer" not in content or "</footer" not in content:
    errors.append("HTML is missing semantic <footer> tags.")
    
  # Check for unique IDs on interactive nodes
  interactive_tags = re.findall(r'<(button|input|textarea|select|a)\s+[^>]*>', content)
  for tag in interactive_tags:
    if "id=" not in tag and "href=\"#\"" not in tag and "type=\"submit\"" not in tag:
      warnings.append(f"Interactive element lacks descriptive ID attribute: {tag}")
      
  # Check for structured schemas
  if 'id="schema-webpage"' not in content:
    errors.append("Missing WebApplication structured JSON-LD schema inside HTML.")
  if 'id="schema-faq"' not in content:
    errors.append("Missing FAQPage structured JSON-LD schema inside HTML.")
  if 'id="schema-breadcrumb"' not in content:
    errors.append("Missing BreadcrumbList structured JSON-LD schema inside HTML.")
    
  # Check favicon references
  if 'rel="icon"' in content or 'rel="shortcut icon"' in content:
    warnings.append("Favicon link tag found in HTML. guideline mandates Favicons are dynamically injected from the central app.js BrandAssetRegistry.")

def check_css():
  if not os.path.exists(CSS_FILE):
    errors.append(f"Missing essential CSS file: {CSS_FILE}")
    return
    
  with open(CSS_FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()
    
  content = "".join(lines)
  
  # Scan for hardcoded absolute color values
  hex_matches = re.findall(r'#[0-9a-fA-F]{3,8}', content)
  # Filter out linear-gradient or SVG definitions in definition tags
  for match in hex_matches:
    # Allow gold outline and logo gradients inside definitions or variables if required, but flag others
    if match.lower() not in ["#0d9488"]: # Allow only pre-defined exceptions
      warnings.append(f"Hardcoded HEX color found in CSS: {match}. Colors must consume HSL CSS variables.")

  rgb_matches = re.findall(r'rgb(a)?\(.*?\)', content)
  if rgb_matches:
    warnings.append(f"Hardcoded RGB color found in CSS: {rgb_matches}. Colors must consume HSL CSS variables.")

  # Scan for hardcoded transitions
  transition_matches = re.findall(r'transition:\s*(?!var\(--transition-premium\))[a-zA-Z0-9\s.,()\-]+;', content)
  for match in transition_matches:
    warnings.append(f"Hardcoded CSS transition found: {match.strip()}. Use var(--transition-premium) instead.")

  # Scan for hardcoded font sizes outside variables
  font_size_matches = re.findall(r'font-size:\s*(?!var\(--font-size-)[a-zA-Z0-9.()\-]+;', content)
  for match in font_size_matches:
    if "clamp" not in match: # allow clamp directly but alert on absolute pixel fonts
      warnings.append(f"Hardcoded absolute font-size found: {match.strip()}. Consume typography clamps or scale variables.")

def check_js():
  if not os.path.exists(JS_FILE):
    errors.append(f"Missing essential JS file: {JS_FILE}")
    return
    
  with open(JS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()
    
  # Check for centralized inventories
  if "IconRegistry" not in content:
    errors.append("JS is missing the centralized 'IconRegistry' inventory map.")
  if "BrandAssetRegistry" not in content:
    errors.append("JS is missing the centralized 'BrandAssetRegistry' map.")
  if "initializeDynamicFavicon" not in content:
    errors.append("JS is missing dynamic favicon initialization helper.")
    
  # Check currentColor in SVGs
  svgs = re.findall(r'<svg.*?>.*?</svg>', content, re.DOTALL)
  for svg in svgs:
    if 'width="100%"' not in svg or 'height="100%"' not in svg:
      # Allow BrandAssetRegistry SVGs to have fixed sizes, check others
      if "logoMark" not in svg:
        warnings.append(f"Registry SVG lacks standard responsive scaling tags width/height=100%: {svg[:80]}...")
    if 'currentColor' not in svg and "logo-gradient" not in svg:
      warnings.append(f"Registry SVG lacks currentColor setting for stroke/fill details: {svg[:80]}...")

def main():
  print("=== SLIDESCRIPT CODEBASE VALIDATION GATES ===")
  print("Validating design token compliance, semantic guidelines, and dynamic assets...")
  
  check_html()
  check_css()
  check_js()
  
  print("\n--- Warnings ({}) ---".format(len(warnings)))
  for w in warnings:
    print(f"[WARN] {w}")
    
  print("\n--- Errors ({}) ---".format(len(errors)))
  for e in errors:
    print(f"[ERR]  {e}")
    
  print("\n============================================")
  if len(errors) > 0:
    print("VALIDATION STATUS: FAILED (Resolve errors before committing/deploying).")
    sys.exit(1)
  else:
    print("VALIDATION STATUS: SUCCESS (All core design rules followed perfectly).")
    sys.exit(0)

if __name__ == "__main__":
  main()
