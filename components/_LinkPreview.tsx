// components/LinkPreview.js
import { MetaData } from '@/types/meta';

export function LinkPreview(meta: MetaData) {
  return (
    <div>
      {meta && (
        <div className="link-preview">
          {meta.image && <img src={meta.image} alt={meta.title} />}
          <h3>{meta.title}</h3>
          <p>{meta.description}</p>
          <a href={meta.url} target="_blank" rel="noopener noreferrer">
            {meta.url}
          </a>
        </div>
      )}

      <style jsx>{`
        .input-container {
          display: flex;
          gap: 8px;
        }

        .url-input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 300px;
        }

        .fetch-button {
          padding: 8px 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .fetch-button:hover {
          background-color: #005bb5;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }

        .link-preview {
          margin-top: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 400px;
        }

        .link-preview img {
          max-width: 100%;
          border-radius: 8px;
        }

        .link-preview h3 {
          font-size: 1.2rem;
          margin: 8px 0;
        }

        .link-preview p {
          color: #555;
        }

        .link-preview a {
          color: #0070f3;
          text-decoration: none;
        }

        .link-preview a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default LinkPreview;
