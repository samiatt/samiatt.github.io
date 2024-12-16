import os
import subprocess

def install_homebrew():
    print("Checking for Homebrew...")
    if subprocess.run(["which", "brew"], stdout=subprocess.PIPE).returncode != 0:
        print("Homebrew not found. Installing...")
        os.system('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')
    else:
        print("Homebrew is already installed.")

def install_ruby_and_jekyll():
    print("Installing Ruby and Jekyll...")
    os.system("brew install ruby")
    os.system("gem install jekyll bundler")

def install_fontawesome():
    print("Installing Font Awesome CSS...")
    os.system("npm install --save @fortawesome/fontawesome-free")

def main():
    install_homebrew()
    install_ruby_and_jekyll()
    install_fontawesome()
    print("\nAll dependencies installed successfully!")

if __name__ == "__main__":
    main()
