import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import polygonMaskOptions from "./config/particles";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import "./App.css";

const Polygon = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(() => polygonMaskOptions, []);
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded as any}
      options={options as any}
    />
  );
};

export default Polygon;
