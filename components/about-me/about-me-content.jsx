import classes from './about-me-content.module.scss';
import Image from 'next/image';
import MyPicture from '/public/images/my-picture.jpeg';

const AboutMeContent = () => {
  const startYear = 2020;
  const expYears = new Date().getFullYear() - startYear;

  return (
    <article className={classes.container}>
      <h2 className={classes['container--heading']}>About Me</h2>
      <Image
        className={classes['container--picture']}
        src={MyPicture}
        width={300}
        alt="Picture of Tran Binh Minh, a senior software developer/engineer"
      />
      <p className={classes['container--content']}>
        {/* This is Minh Tran, a front-end developer from VietNam. I started my
        career 3 years ago with the love of changing the world through
        technology, by learning coding via the Internet, by myself. I enjoy
        every time I figure out how to resolve a bug and I pay close attention
        to coding logic, and structure because I always believe that with a firm
        foundation, the quality is put at a higher level with scalability and
        security. I consider myself lucky since I'm able to do what I love and
        leverage my career path in this industry, even though others consider
        it. I speak several languages, Japanese (N3), English (B1), and
        Vietnamese (Native), and some are HTML, CSS, JavaScript - MERN &
        TypeScript (Intermediate-level). I have a passion for game development
        and actually started a small Startup in E-Sport before I jumped into
        coding. However, I am glad to work on different kinds of projects for
        digital transformation society such as education, logistics, or fintech.
        I'm transitioning myself to the Cloud and will soon take the flying
        ticket of AWS Cloud Certificate. While I'm preparing for that, I'm
        willing to work on the job taking advantage of exp to interact with AWS
        in most recent projects. I appreciate your dropping by and hope to be a
        part of your products. */}
        This is Minh Tran, a software engineer with {expYears} years of
        experience from Viet Nam. My main programming languages, frameworks &
        databases are HTML, CSS, Javascript, ReactJS, NextJS, VueJS, NuxtJS,
        Typescript, NodeJS, ExpressJS, MongoDB, Mongoose, MySQL, etc. I can
        speak Vietnamese (native), English (Intermediate), Japanese
        (Intermediate). My main goal is to become a solution architect, where I
        can use my knowledge to consult and help client solve their business
        problems through technology. Besides, I also do researches and write
        blogs about new technologies, IT industry, etc. Thanks for coming to my
        personal website!
      </p>
    </article>
  );
};

export default AboutMeContent;
