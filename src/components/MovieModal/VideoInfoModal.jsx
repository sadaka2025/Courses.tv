import React from "react";
import "./VideoInfoModal.css";

export default function VideoInfoModal({ open, onClose, title, content }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal neon" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-header"
          style={{
            fontFamily: "'Arabic Typesetting', serif",
            fontSize: "40px",
            padding: "0.75rem",
            color: "black", // couleur par défaut
            transition: "color 0.3s", // animation douce au survol
          }}
        >
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-content">{content}</div>

        <div className="modal-footer">
          <button className="btn-gold" onClick={onClose}>
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
