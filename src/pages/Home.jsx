import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
    <section className="bg-primary dark:bg-dark-primary">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Roxane Seibel</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Just a student in computer science :)</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white border-secondary dark:border-dark-secondary dark:hover:bg-dark-secondary dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img src="../public/images/me.png" alt="mockup"/>
        </div>                
    </div>
</section>
      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          commodi repellendus.{" "}
          <a
            href="#"
            class="font-medium text-primary dark:text-dark-primary underline underline-offset-4 hover:text-secondary dark:hover:text-dark-secondary hover:underline"
          >
            Read more
          </a>{" "}
          aliquam illo ut temporibus voluptatum totam iste vitae doloremque
          ipsum officiis, autem dolore earum praesentium? Quae voluptatum maxime
          at?
        </p>
      </section>

      <section
        class="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24 
      md:px-14 
      px-12 
      ml-0 mr-0 

      md:gap-6 
      lg-gap-12 
      "
      >
        <Card
          className="max-w-sm mx-auto bg-primary dark:bg-dark-primary  hover:animate-pulse  hover:bg-secondary dark:hover:bg-dark-secondary"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-white  ">
            SUPER Snazzy
          </h5>
          <p className="font-normal dark:text-gray-400  text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button className="bg-white dark:bg-white text-secondary hover:bg-dark-primary dark:text-dark-secondary">View project</Button>
        </Card>
        <Card
          className="max-w-sm mx-auto bg-primary dark:bg-dark-primary hover:animate-bounce dark:hover:bg-dark-secondary hover:bg-secondary"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-crypto-wallet.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
            Snazzy Crypto Wallet
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button className="bg-white dark:bg-white text-secondary dark:text-dark-secondary"
          >View project</Button>
        </Card>
        <Card
          className="max-w-sm mx-auto bg-primary dark:bg-dark-primary hover:animate-ping  hover:bg-secondary hover:dark:bg-dark-secondary"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-smoothie.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
            Smooth Smoothies
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button className="bg-white dark:bg-white text-secondary dark:text-dark-secondary">View project</Button>
        </Card>
      </section>
    </>
  );
};

export default Home;
