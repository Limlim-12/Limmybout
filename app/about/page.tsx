import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      {/* Don't forget this part!
        1. Create a folder: `public/images/`
        2. Add a photo (e.g., `profile.jpg`) to that folder.
        3. Uncomment the <Image> component below and check the 'src' path.
      */}

      <Image
        src="/images/profile.jpg" // Make sure this path is correct
        alt="A photo of me"
        width={200} 
        height={200}
        className="rounded-full mb-6 ring-2 ring-offset-4 ring-gray-300"
      /> 
      

      <div className="max-w-2xl text-left space-y-4">
        <p className="text-lg">
          Hello, I'm Lim! I'm a Computer Engineering graduate currently working 
          as a Technical Support Specialist. I'm a passionate, aspiring developer, 
          and this site is a showcase of my journey toward my dream of becoming a 
          successful Software Engineer.
        </p>
        <p>
          I've always found coding interesting because of its power to make 
          our lives easier and more comfortable. I know the path is challenging, 
          but I'm a firm believer that if you truly love what you are doing, 
          you're living the dream.
        </p>
        <p>
          For me, that passion comes from the creative process. I love 
          bringing new ideas to life and exploring their full potential 
          through code. My current goal is to grow into a full-stack developer, 
          capable of building and managing entire applications.
        </p>
        <p>
          When I'm not at the computer, you can usually find me 
          unwinding with some online games or relaxing and socializing with friends.
        </p>
      </div>
    </div>
  );
}