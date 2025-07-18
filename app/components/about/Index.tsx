import LeftContainer from "./sections/LeftContainer";
import RightContainer from "./sections/RightContainer";

const Index = () => {
  return (
    <section className="h-screen" id="section1">
      <div className="grid grid-cols-[2fr_5fr] h-full">
        <LeftContainer />
        <RightContainer />
      </div>
    </section>
  );
}

export default Index;