// // const pastelPalettes = {
// //calnder changes

// //     blue: ['#D0E8FF', '#A0CFFF', '#74B9FF', '#4D9FFF'],
// //     green: ['#D2F8D2', '#A6E3A1', '#7CD38A', '#55C57A'],
// //     indigo: ['#E0E7FF', '#C7D2FE', '#A5B4FC', '#818CF8'],
// //     gray: ['#F3F4F6', '#D1D5DB', '#9CA3AF', '#6B7280'],
// //     red: ['#FFE5E5', '#FFB3B3', '#FF8080', '#FF4D4D'],
// //   };
  
// //   const getColorTheme = (hex) => {
// //     if (!hex) return 'blue';
// //     const h = hex.toLowerCase();
// //     if (h.includes('4d9f') || h.includes('blue')) return 'blue';
// //     if (h.includes('c57a') || h.includes('green')) return 'green';
// //     if (h.includes('8cf8') || h.includes('indigo')) return 'indigo';
// //     if (h.includes('7280') || h.includes('gray')) return 'gray';
// //     if (h.includes('ff4d') || h.includes('red')) return 'red';
// //     return 'blue';
// //   };
  
// //   const Calender = () => {
// //     const localColor = localStorage.getItem('color') || '#4D9FFF';
// //     const theme = getColorTheme(localColor);
// //     const palette = pastelPalettes[theme];
  
// //     const onEventRendered = (args) => {
// //       const index = new Date(args.data.StartTime).getDay();
// //       const color = palette[index % palette.length];
// //       args.element.style.setProperty('background-color', color, 'important');
// //       args.element.style.setProperty('color', '#000', 'important');
// //     };
  
// //     return (
// //       <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl">
// //         <Header category="page" title="Calendar" />
// //         <ScheduleComponent
// //           height="650px"
// //           eventSettings={{ dataSource: scheduleData }}
// //           selectedDate={new Date(2021, 0, 10)}
// //           eventRendered={onEventRendered}
// //         >
// //           <Inject
// //             services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
// //           />
// //         </ScheduleComponent>
// //       </div>
// //     );
// //   };
//   //make 
// //  Step 1: Remove the Background (2 Options)
// ✅ Option 1: Use a Transparent Lottie JSON
// Many Lottie files come with a hardcoded white background (yikes 😬).

// Use Lottiefiles.com and:

// Search for one with a transparent background.

// OR upload your existing .json → Edit in their editor → Remove background layer → Download again.

// ✅ Option 2: Override with CSS
// If you can’t change the JSON right now, try forcing the background to disappear like this:

// jsx
// Copy
// Edit
// <div className="w-64 h-64 bg-transparent">
//   <Lottie
//     animationData={animationData}
//     loop={true}
//     style={{ background: 'transparent' }}
//   />
// </div>
// Also, just to be paranoid-proof, throw in this extra CSS:

// css
// Copy
// Edit
// .lottie-container canvas {
//   background: transparent !important;
// }
// 🖼 Bonus: Tailwind Styling Tips
// You can style the Lottie container for your dashboard:

// jsx
// Copy
// Edit
// <div className="rounded-xl p-4 shadow-lg backdrop-blur bg-white/10">
//   <Lottie animationData={animationData} loop={true} />
// </div>
// ⚠️ Watch for:
// If you're using dark mode, a light animation might still look harsh. Consider tinting with mix-blend-mode or placing a semi-transparent overlay.

// Set size constraints (w-40, h-40) to prevent it from taking over the layout.

//modal pop up -portal,materailui ,autho , theme lazyloading code splitting  ,skeleton, accordians , animation homepage change aos