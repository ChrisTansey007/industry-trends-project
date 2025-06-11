# RAG System: Chroma Vector DB + OpenRouter

## Features

- Web-based UI (Streamlit) for uploading PDF, TXT, DOCX files and querying a RAG system
- Unified backend (FastAPI) for file ingestion and RAG queries
- Chroma vector database for document storage and retrieval
- OpenRouter LLM integration (user provides API key and model)
- Runs in a Python virtual environment

## Setup

1. **Create and activate virtual environment**
   ```
   python -m venv venv
   venv\Scripts\activate   # On Windows
   ```

2. **Install dependencies**
   ```
   pip install -r requirements.txt
   ```

3. **Run the app**
   ```
   streamlit run app.py
   ```

   This will start the Streamlit UI and the FastAPI backend.

## Usage

- Enter your OpenRouter API key and model in the sidebar.
- Upload PDF, TXT, or DOCX files to ingest them into the vector database.
- Enter a query and submit to get a RAG-powered answer.

## Notes

- Embedding via OpenRouter is not yet implemented; all documents are stored as raw text.
- Similarity search is a placeholder; all documents are used as context for now.
- For production, implement embedding and real similarity search in `chroma_client.py` and `openrouter_client.py`.

## Project Structure

See `project-plan.md` for a detailed architecture and implementation plan.