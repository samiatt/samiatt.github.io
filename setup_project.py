import os

# Define the folder and file structure
structure = {
    "root": ["en.html", "404.html", "index.html", "styles.css", "script.js", "favicon.ico"],
    "assets": ["images", "fonts"],
}

def create_structure(base_path, structure):
    for folder, files in structure.items():
        folder_path = os.path.join(base_path, folder) if folder != "root" else base_path
        os.makedirs(folder_path, exist_ok=True)
        for file in files:
            file_path = os.path.join(folder_path, file)
            if not os.path.exists(file_path):
                open(file_path, 'w').close()  # Create an empty file
                print(f"Created: {file_path}")
            else:
                print(f"Skipped: {file_path} (already exists)")

if __name__ == "__main__":
    base_path = os.getcwd()  # Set base path to the current working directory
    create_structure(base_path, structure)
    print("\nProject structure created successfully!")
