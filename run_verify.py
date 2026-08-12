import html
import re
import json

# Load reference analysis.md
with open(r'd:\Boomingfx.org\.agents\explorer_survey_1\analysis.md', 'r', encoding='utf-8') as f:
    ref_md = f.read()

# Load implemented page.tsx
with open(r'd:\Boomingfx.org\boomingfx-next\src\app\about-me\page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Clean JSX code content: unescape HTML entities and replace React quotes/entities
code_clean = html.unescape(
    code.replace('&apos;', "'")
        .replace('&mdash;', '—')
        .replace('&quot;', '"')
        .replace('&lt;', '<')
        .replace('&gt;', '>')
)

# Strip tags without introducing space around inline tags (emulates DOM textContent)
code_no_tags = re.sub(r'<[^>]+>', '', code_clean)
code_norm = re.sub(r'\s+', ' ', code_no_tags).strip()

# Target Copywriting Items to verify
ref_dict = {
    'H1': 'I AM MINOCHEL BARTHELEMY',
    'H2': 'FOUNDER, BOOMINGFX',
    'P1': "My name is Minochel Barthelemy, and I'm from Edmonton, Alberta, Canada. Like many others, my journey started with humble beginnings. I got my first job at 16 years old, working at Ricky's All Day Grill. It taught me the value of hard work early on — a lesson that carried me through my education at NAIT, where I completed the Chemical Technology program.",
    'P2': "At 22 years old, I landed my first career position as a lab analyst. By the age of 24, I had advanced to a lab chemist role at Intertek. On paper, my career was progressing: a steady job, a stable future. But I felt a growing desire to build something of my own. While working full time, I began investing in the stock market, starting with ETFs. As I learned more, I discovered trading — and everything changed.",
    'P3': "I started my trading journey in 2020, during the COVID-19 pandemic. I quickly realized this wasn't just a side hustle; it was one of the most challenging paths I could've taken, with an average success rate of only 5%. But I was all in. I worked from 8:00 a.m. to 4:30 p.m., got home by 5:15, took a nap from 6:00 to 7:00, then studied the charts and the market until 1:00 a.m. I did that every day for over two years. I lost a lot of money in the beginning. I made mistakes. But I stayed consistent. I kept learning, refined my strategy, and implemented proper risk management.",
    'P4': "Slowly, things started to click. In 2023, I left my job and became a full-time trader.",
    'P5': 'BoomingFx began in 2021, and it all started with someone I worked alongside in the lab. Dwayne, originally a co-worker and later a close friend, noticed I was always on my phone during breaks. He asked what I was doing, and I explained everything I was learning about trading. He said, "I\'ll pay you $50 a month to teach me." That moment sparked something real. From there, it grew through word of mouth. What began as a one-on-one mentorship turned into a growing global community.',
    'P6': "Today, BoomingFx provides trading mentorship to people around the world with a physical office now open in downtown Edmonton.",
    'P7': "But here's what I always tell people: trading is not for everyone. If you're looking for a shortcut or a get-rich-quick fix, this isn't it. At BoomingFx, we're fully transparent with all of our mentees. I share both my wins and my losses. I don't sell dreams — I teach reality. What truly sets BoomingFx apart is our community. We have a strong group of committed, experienced mentees who are not only focused on their own growth, but are genuinely willing and ready to help newcomers from the ground up. Whether you're just starting or leveling up, you'll be surrounded by people who want to see you win and are willing to walk the path with you.",
    'P8': "If you're someone who's ready to commit, stay disciplined, and put in the work — just like I did — and you're looking for a reputable, experienced trading community, then we'd be proud to welcome you to BoomingFx. We take pride in what we do, and we make ourselves available to our mentees 24/7.",
    'P9': "All we ask in return is that you take it seriously.",
    'P10': "Let's get to work."
}

print("="*75)
print("EMPIRICAL VERBATIM COPYWRITING AUDIT: /about-me PAGE (M1)")
print("="*75)

all_pass = True
results = []

for key, ref_text in ref_dict.items():
    ref_norm = re.sub(r'\s+', ' ', ref_text).strip()
    match = ref_norm in code_norm
    if match:
        print(f"[{key:3}] PASS | Verbatim Complete Match ({len(ref_norm)} chars)")
        results.append({'item': key, 'status': 'PASS', 'length': len(ref_norm), 'text': ref_norm})
    else:
        all_pass = False
        print(f"[{key:3}] FAIL | Copywriting Mismatch / Truncated")
        results.append({'item': key, 'status': 'FAIL', 'length': len(ref_norm), 'text': ref_norm})

# Additional structural & asset checks
extra_checks = {
    'Founder Photo Asset': '/images/about-me/Minochel Barthelemy.jpeg' in code,
    'Founder Signature Asset': '/images/about-me/boomingfx-founder-signature.jpg' in code,
    'Pre-footer CTA Headline': 'Trade Smarter. Grow Faster.' in code_norm,
    'Pre-footer CTA Subtitle': 'BoomingFX. Where transparency meets expertise. Get mentorship, signals, and community support to trade with confidence.' in code_norm,
    'Pre-footer CTA Button': 'Enroll Now!' in code_norm
}

print("-" * 75)
print("EXTRA STRUCTURAL & ASSET CHECKS:")
for check_name, passed in extra_checks.items():
    st = "PASS" if passed else "FAIL"
    print(f"[{st}] {check_name}")
    if not passed:
        all_pass = False

print("-" * 75)
verdict = "APPROVE" if all_pass else "REQUEST_CHANGES"
print(f"OVERALL EMPIRICAL VERDICT: {verdict}")
print("=" * 75)

# Save JSON results for analysis report and handoff
with open(r'd:\Boomingfx.org\.agents\challenger_about_me_r1_2\audit_results.json', 'w', encoding='utf-8') as jf:
    json.dump({'verdict': verdict, 'all_pass': all_pass, 'results': results, 'extra_checks': extra_checks}, jf, indent=2)
