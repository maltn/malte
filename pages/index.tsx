import Divider from "@/components/Divider";
import Image from "next/image";

const Section1 = () => (
  <div className="w-full h-96 mt-56">
    <Image
      src={"/profile.jpg"}
      alt="Picture of Malte"
      width={564 / 2}
      height={591 / 2}
      className="float-left rounded-md mt-2"
    ></Image>
    <p className="w-2/3 float-right h-full text-xl">
      <span className="text-5xl mb-6 block">Malte Wallén</span>
      Nam felis arcu, interdum et massa eget, congue ullamcorper neque. Nulla
      facilisi. Morbi at odio aliquet, scelerisque purus eu, imperdiet tortor.
      Duis euismod arcu at pellentesque finibus. Morbi eu gravida nisl.
      Suspendisse tempor blandit vulputate. Morbi non convallis lectus. Maecenas
      vel vestibulum velit. Nullam lobortis porttitor ultrices. Pellentesque
      dignissim venenatis tortor sit amet fermentum. Curabitur pretium nulla id
      sollicitudin porttitor. In hac habitasse platea dictumst. Integer vehicula
      metus et odio tincidunt euismod. Etiam elementum ut ipsum nec
      pellentesque. Ut venenatis, massa at faucibus dapibus, tortor ante congue
      nibh, facilisis fringilla lorem lectus a libero. Sed nunc lectus, rhoncus
      at enim.
    </p>
  </div>
);

const Section2 = () => (
  <div className="w-full h-96 mt-6">
    <p className="w-2/3 text-xl">
      Nam felis arcu, interdum et massa eget, congue ullamcorper neque. Nulla
      facilisi. Morbi at odio aliquet, scelerisque purus eu, imperdiet tortor.
      Duis euismod arcu at pellentesque finibus. Morbi eu gravida nisl.
      Suspendisse tempor blandit vulputate. Morbi non convallis lectus. Maecenas
      vel vestibulum velit. Nullam lobortis porttitor ultrices. Pellentesque
      dignissim venenatis tortor sit amet fermentum. Curabitur pretium nulla id
      sollicitudin porttitor. In hac habitasse platea dictumst. Integer vehicula
      metus et odio tincidunt euismod. Etiam elementum ut ipsum nec
      pellentesque. Ut venenatis, massa at faucibus dapibus, tortor ante congue
      nibh, facilisis fringilla lorem lectus a libero. Sed nunc lectus, rhoncus
      at enim.
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="w-full flex justify-center mb-20">
      {/* content */}
      <div className="w-2/5">
        {/* introduction */}
        <div className="w-full flex-col items-center">
          {/* section1  */}
          <Section1 />
          <Section2 />
        </div>

        <Divider width="full" />
        {/* projects */}
        <div className="w-full">
          <span className="text-5xl mb-20 block text-center mt-20">
            Personal Projects
          </span>
          <div className="w-full">
            <div className="w-1/3 h-96 p-4 float-left">
              <div className="w-full h-full bg-white shadow-md rounded-sm"></div>
            </div>
            <div className="w-1/3 h-96 p-4 float-left">
              <div className="w-full h-full bg-white shadow-md rounded-sm"></div>
            </div>
            <div className="w-1/3 h-96 p-4 float-left">
              <div className="w-full h-full bg-white shadow-md rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* socials */}
      </div>
    </div>
  );
}
