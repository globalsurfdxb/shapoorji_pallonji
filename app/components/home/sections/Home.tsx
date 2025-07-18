const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center  bg-cover bg-center heroafter"
      style={{
        backgroundImage: "url('../assets/images/hero-bg1.jpg')",
      }}>
      <div className="absolute inset-0 bg-[#0000008C]"></div>
      <div className="  relative z-50">
        <h1 className="text-4xl font-bold mb-4">Trusted Legacy of Engineering Excellence</h1>
      </div>
    </section>
  );
}
 
export default Home;