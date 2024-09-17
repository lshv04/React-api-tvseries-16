import { useState, useEffect, useRef } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ref para manter a URL e opções estáveis
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    // Atualize as referências
    urlRef.current = url;
    optionsRef.current = options;
  }, [url, options]);

  useEffect(() => {
    // Verifica se a URL está definida antes de fazer a requisição
    if (!urlRef.current) return;

    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(urlRef.current, { ...optionsRef.current, signal: controller.signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup para abortar a requisição quando o componente for desmontado
    return () => {
      controller.abort();
    };
  }, [url]); // Dependência apenas na URL

  return { data, loading, error };
};

export default useFetch;
