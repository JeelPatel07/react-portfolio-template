// Skills Icons
import htmlIcon from "./images/html.svg"
import figmaIcon from "./images/figma.svg"
import reactIcon from "./images/react.svg"
import apiIcon from "./images/api.svg"
import systemIcon from "./images/system.svg"
import webDevIcon from "./images/web-dev.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jeel Patel",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  // headerParagraph:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "jeeltpatel@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      
      
    },
    {
      title: "Project Two", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      
      
    },
    {
      title: "Project Three", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      
      
    },
    
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
  "Hi.I'm Jeel, a software engineer and  CS Senior at BITS Pilani",
  aboutParaTwo:
  "I develop and deploy flexible mobile apps and modern websites",
  aboutParaThree:
  "Among other stuff,this is the tech that I like to work with React,Node.js,Express,SQL,MongoDB ." ,
  
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
   
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: webDevIcon,
      para:
     " Our development solutions accelerate workflows, boost revenues & optimize business operations from concept-to-code and development-to-deployment." },
    {
      img: systemIcon,
      para:
      "To overcome the challenges relating to everything from architectural design to testing to execution, we employ new technologies and processes.  "  },
  {
      img: apiIcon,
      para:
      "We develop reliable, well-documented, and easy-to-consume APIs that enable flexible integrations and customization of existing software products."   },
    {
      img: reactIcon,
      para:
        "We use the latest technology, architectures, and trends to build scalable, responsive apps that provide customers with excellent customer service across multiple channels."  },
    {
      img: figmaIcon,
      para:
      "We use the latest technology, architectures, and trends to build scalable, responsive apps that provide customers with excellent customer service across multiple channels." },
    
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
 
    // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/JeelPatel07" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
    {
      img:linkedinIcon,
      url:"https://www.linkedin.com/in/jeel-patel-26b256190/",
    },
  ],

  // End Contact Section ---------------
}


