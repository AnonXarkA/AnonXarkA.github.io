export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-center w-full px-[18.75px] py-[100px] md:px-16">
      <h1 className="text-[38px] font-bold box-border caret-transparent leading-[44px] mb-4">
        Damon McRae
      </h1>
      <ul role="list" className="box-border caret-transparent list-none pl-0">
        <li className="text-neutral-400 box-border caret-transparent">
          <div className="box-border caret-transparent">
            <span className="box-border caret-transparent">001</span>
            Web Development / Design
          </div>
        </li>
        <li className="text-neutral-400 box-border caret-transparent">
          <div className="box-border caret-transparent">
            <span className="box-border caret-transparent">002</span>
            UI / UX
          </div>
        </li>
        <li className="text-neutral-400 box-border caret-transparent">
          <div className="box-border caret-transparent">
            <span className="box-border caret-transparent">003</span>
            Tutoring
          </div>
        </li>
      </ul>
      <div className="box-border caret-transparent w-[300px] mt-8 md:w-96">
        <p className="box-border caret-transparent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          blanditiis quaerat optio placeat ipsa at quos qui culpa ea fuga
          maiores nesciunt architecto animi iusto error mollitia, amet sunt
          quibusdam!
        </p>
      </div>
    </div>
  );
};
