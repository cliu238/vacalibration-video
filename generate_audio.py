#!/usr/bin/env python3
"""
Generate audio files for VA-Calibration video using OpenAI TTS API.
Reads API key from .env file.
"""

import os
from pathlib import Path
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Narration scripts for each scene
scripts = {
    "scene1-title.mp3": """
Verbal autopsy algorithms help determine causes of death, but they're not perfect.
Introducing VA-Calibration: a method to correct systematic errors using gold-standard data.
""",
    "scene2-problem.mp3": """
When medical records aren't available, verbal autopsy uses family interviews to determine cause of death.
But these algorithms systematically misclassify causes. For example, when the true cause is pneumonia,
the algorithm might incorrectly predict sepsis twenty percent of the time.
This matters because biased estimates mislead public health decisions and resource allocation.
Without correction, we can't trust the mortality data we're basing critical decisions on.
""",
    "scene3-solution.mp3": """
VA-Calibration solves this problem using gold-standard data from the CHAMPS project.
CHAMPS collected paired data from seven countries across Africa and Asia, combining
minimally invasive tissue sampling—the most accurate method—with verbal autopsy results.
The method works in two phases: First, we estimate the misclassification matrix by comparing
verbal autopsy predictions to the gold-standard MITS diagnoses.
Second, we apply these corrections to verbal autopsy datasets, transforming biased estimates
into calibrated, accurate cause-specific mortality fractions.
""",
    "scene4-math.mp3": """
The base model simplifies misclassification by breaking it into two components:
intrinsic accuracy—how well the algorithm detects each cause—and pull—the tendency
to incorrectly assign deaths to popular causes. This reduces complexity dramatically.
Here's a misclassification matrix showing how often each true cause gets classified.
The diagonal shows correct predictions in green, while off-diagonal errors appear in orange.
The hierarchical structure borrows strength across countries when local data is limited,
using country-specific estimates when possible, but falling back to pooled estimates when needed.
""",
    "scene5-results.mp3": """
In Mozambique, calibration corrected biased estimates for over eleven hundred neonatal deaths,
revealing that infections were underestimated while other causes were overcounted.
The method reduces error by thirty-five to forty percent, produces well-calibrated confidence intervals,
and consistently outperforms simpler calibration approaches.
""",
    "scene6-cta.mp3": """
You can use VA-Calibration through the R package. Pre-computed misclassification matrices,
documentation, and code are all publicly available on GitHub.
""",
    "scene7-outro.mp3": """
Based on research by Pramanik and colleagues, twenty twenty-five.
""",
}

# Output directory
output_dir = Path("public/audio")
output_dir.mkdir(parents=True, exist_ok=True)

# Voice options: alloy, echo, fable, onyx, nova, shimmer
# Recommended: nova (friendly female) or echo (clear male)
VOICE = "nova"

# Model options: tts-1 (faster, cheaper) or tts-1-hd (higher quality)
MODEL = "tts-1-hd"

print(f"Generating audio files using OpenAI TTS...")
print(f"Voice: {VOICE}")
print(f"Model: {MODEL}")
print(f"Output directory: {output_dir}")
print("-" * 60)

# Generate each audio file
for filename, text in scripts.items():
    print(f"Generating {filename}...", end=" ")

    try:
        response = client.audio.speech.create(
            model=MODEL,
            voice=VOICE,
            input=text.strip(),
            response_format="mp3"
        )

        output_path = output_dir / filename
        response.stream_to_file(str(output_path))

        # Get file size
        file_size = output_path.stat().st_size / 1024  # KB
        print(f"✓ ({file_size:.1f} KB)")

    except Exception as e:
        print(f"✗ Error: {e}")

print("-" * 60)
print(f"✓ All audio files generated successfully!")
print(f"\nFiles saved to: {output_dir.absolute()}")
print(f"\nNext steps:")
print(f"1. Run 'npm run dev' to preview video with audio")
print(f"2. Open http://localhost:3000")
print(f"3. Select 'VacalibrationVideo' composition")
print(f"4. Play and verify audio syncs with visuals")
