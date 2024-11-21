export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    pdfUrl: string;
    thumbnail?: string;
    courseUrl?: string;
    rating?: number;
    certificateUrl?: string;
  }
  
  // Sample certificate data
  export const certificates: Certificate[] = [
    {
      id: "UC-d6be5605-efcc-49c1-a71a-07137b83cfb9",
      title: "Angular 16 & RxJS: Build Modern Single Page Applications",
      issuer: "Udemy",
      date: "2024",
      pdfUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d6be5605-efcc-49c1-a71a-07137b83cfb9.pdf",
      certificateUrl: "https://www.udemy.com/certificate/UC-d6be5605-efcc-49c1-a71a-07137b83cfb9/",
      thumbnail: "https://img-c.udemycdn.com/course/240x135/5634404_ec85.jpg",
      courseUrl: "https://www.udemy.com/course/angular-16-rxjs-build-modern-single-page-applications/",
      rating: 3.4
    },
    {
        id: "UC-754248fe-0f6c-4405-8d51-a7a6b4664e0b",
        title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
        issuer: "Udemy",
        date: "2024",
        pdfUrl: "https://www.udemy.com/certificate/UC-754248fe-0f6c-4405-8d51-a7a6b4664e0b/",
        certificateUrl: "https://www.udemy.com/certificate/UC-754248fe-0f6c-4405-8d51-a7a6b4664e0b/",
        thumbnail: "https://img-c.udemycdn.com/course/240x135/5039564_6b62.jpg",
        courseUrl: "https://www.udemy.com/course/cssbootstrapjavascriptreact-overview-course-for-beginners/",
        rating: 3.4
      },
      {
        id: "UC-71634fed-3791-4018-9e73-649ccaf05b11",
        title: "ReactJs - The Complete ReactJs Course For Beginners",
        issuer: "Udemy",
        date: "2024",
        pdfUrl: "https://www.udemy.com/certificate/UC-71634fed-3791-4018-9e73-649ccaf05b11/",
        certificateUrl: "https://www.udemy.com/certificate/UC-71634fed-3791-4018-9e73-649ccaf05b11/",
        thumbnail: "https://img-c.udemycdn.com/course/240x135/5679234_657a.jpg",
        courseUrl: "https://www.udemy.com/course/reactjs-the-complete-reactjs-course-for-beginners/",
        rating: 3.7
      },
      {
        id: "UC-8de4ea86-d881-4a26-8d0e-d63ca8f556bd",
        title: "Java Foundations: Mastering the Basics",
        issuer: "Udemy",
        date: "2024",
        pdfUrl: "https://www.udemy.com/certificate/UC-8de4ea86-d881-4a26-8d0e-d63ca8f556bd/",
        certificateUrl: "https://www.udemy.com/certificate/UC-8de4ea86-d881-4a26-8d0e-d63ca8f556bd/",
        thumbnail: "https://img-c.udemycdn.com/course/240x135/5647372_2ca0_2.jpg",
        courseUrl: "https://www.udemy.com/course/java-foundations-mastering-the-basics/",
        rating: 3.7
      },



      
    // Add more certificates here
  ];
  
  export async function parseUdemyCertificateUrl(url: string): Promise<Partial<Certificate>> {
    try {
      const certificateId = url.split('/certificate/')[1].replace(/\/$/, '');
      
      // Note: Due to CORS restrictions, this is just a template.
      // In a real implementation, you would need a backend server to fetch this data
      // or use Udemy's API with proper authentication
      
      return {
        id: certificateId,
        certificateUrl: url,
        issuer: "Udemy",
        // Other fields would be populated from the actual API response
      };
    } catch (error) {
      console.error('Error parsing Udemy certificate URL:', error);
      throw new Error('Invalid Udemy certificate URL');
    }
  }