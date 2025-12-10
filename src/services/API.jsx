// src/services/API.jsx

import videos from "../data/nour-alyakine.json";

// Simulation d'une API TMDB → mais en local
const api = {
  // Pour récupérer la liste des vidéos
  get: async () => {
    return {
      data: {
        results: videos,
      },
    };
  },

  // Pour récupérer les détails d’une vidéo par ID
  getById: async (id) => {
    const video = videos.find((v) => v.id === Number(id));
    return {
      data: video || null,
    };
  },

  // Pour la recherche
  search: async (query) => {
    const q = query.toLowerCase();
    return {
      data: {
        results: videos.filter((v) => v.title.toLowerCase().includes(q)),
      },
    };
  },
};

export default api;
