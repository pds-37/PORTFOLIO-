import os, subprocess

ffmpeg = r'ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe'
videos = ['Swastha Parivar.mp4', 'StudyBuddy.mp4', 'HealthNexus.mp4']

for v in videos:
    input_path = f'assets/{v}'
    out_name = "compressed_" + v.replace(" ", "")
    output_path = f'assets/{out_name}'
    print(f"Compressing {v}...")
    subprocess.run([
        ffmpeg, '-i', input_path, 
        '-vf', 'scale=-2:720,fps=24', 
        '-vcodec', 'libx264', 
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        '-crf', '32', 
        '-preset', 'veryfast', 
        '-an', 
        output_path, 
        '-y'
    ])
    print(f"Done compressing {v}.")
