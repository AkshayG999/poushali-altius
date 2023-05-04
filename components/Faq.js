// import { useState } from 'react';
// import styles from '../styles/Faq.module.css'
// function FAQAccordion({ question, answer }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   const arrowStyles = {
//     transition: 'transform 0.2s',
//     transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//   };

//   const questionStyles = {
    
//     backgroundColor: isOpen ? '#eb4c87' : 'transparent',
//     color:isOpen ? '#fff' : 'black',
//     padding: '15px',
//     borderRadius: '5px',
    
//   };

//   const answerStyles = {
//     border: isOpen ? '3px solid #eb4c87' : 'none',
//     padding: '15px',
//     borderRadius: '5px',
//     marginBottom: '10px',
//     transition: 'max-height 0.2s ease-out',
//     maxHeight: isOpen ? '500px' : '0',
//     overflow: 'hidden',
//     backgroundColor: '#f8e8ec',
//   };

//   return (
//     <div>
    
//       <button
//         onClick={toggleAccordion}
//         style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...questionStyles }}
//         className={styles.faqwrap}
        
//       >
//         <span>{question}</span>
//         <span style={{ ...arrowStyles, marginLeft: 'auto' }}>▼</span>
//       </button>
//       {isOpen && (
//         <p style={answerStyles} className={styles.faqanswrap}>
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// }

// function FAQ() {
//   const faqs = [
//     {
//       question: 'What is the average IVF cost in Bangalore?',
//       answer:
//         "The average cost of In Vitro Fertilization (IVF) in Bangalore, India, ranges from INR 1.2 lakhs to INR 2.5 lakhs per cycle. The actual cost may vary depending on the clinic, the fertility specialist's expertise and the type of treatment required, and the patient's medical condition. Additional expenses, such as medications, consultations, and diagnostic tests, may also add to the overall cost of IVF treatment.",
//     },
//     {
//       question: 'IVF Treatment Centres in Bangalore?',
//       answer:
//         "Altius Fertility is a place where dreams come true, hopes never fade, and possibilities never end. We strive tirelessly to assist you in experiencing the joy of holding your little bundles of joy in your arms.You no longer need to go long distances for fertility treatments! Altius Fertility now has five strategically positioned branches in Bengaluru and wants to expand to additional places in the near future. Our branches are located in HBR Layout,Rajajinagar,RR Nagar",
//     },
//     {
//       question: 'What is Success rate and Risk percentage involved in IVF treatment?',
//       answer:
//         "In Vitro Fertilization (IVF) treatment success rate and risk percentage vary based on several factors such as the age and health of the patients, type of IVF technique used, and the quality of the sperm and egg. According to the latest statistics, the average success rate of IVF treatment is around 40% per cycle, and the risk percentage varies from 1% to 5% depending on the treatment protocol and individual factors. Although IVF treatment is generally considered safe, there are some potential risks involved, including ovarian hyperstimulation syndrome (OHSS), multiple pregnancies, and ectopic pregnancy. Patients should consult their fertility specialists and discuss the possible risks and benefits of IVF treatment before proceeding with the procedure.",
//     },
//     {
//         question: 'What are the additional costs related to IVF Treatment in Bangalore and nearby areas?',
//         answer:
//           "In vitro fertilization (IVF) treatment can come with additional costs that patients should be aware of. These costs may include medications to stimulate egg production and prepare the uterus for pregnancy, which are usually not covered by insurance. Pre-implantation genetic testing (PGT) can be done to check the health of embryos and can cost several thousand dollars. Anesthesia may also be necessary for the egg retrieval procedure and storage fees for frozen embryos can add up. Multiple cycles may be required for success, and gestational surrogacy can add significant expenses for the surrogate's fees and medical expenses. It is crucial to discuss all potential costs with your doctor and fertility clinic before beginning IVF treatment.",
//       },
//   ];

//   return (
//     <div>
//     <div className={styles.headwrap}>
    
//     <h1 className={styles.header}>Frequently Asked Questions</h1>
    
//     </div>
//     <hr className={styles.linewrap}/>
    
//       {faqs.map((faq, index) => (
//         <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
//       ))}
//     </div>
//   );
// }

// export default FAQ;
