import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-muted-foreground">Ups! Pàgina no trobada</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Torna a l'inici
        </a>
      </div>
    </div>
  );
};

export default NotFound;
