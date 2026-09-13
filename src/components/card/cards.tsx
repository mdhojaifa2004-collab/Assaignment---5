// import { use, useState } from "react";
// import type { Icard } from "../../types/cardtype";
// import { toast } from "react-toastify";

// interface CardsProps {
//     cardsPromise: Promise<Icard[]>;
// }

// const Cards = ({ cardsPromise }: CardsProps) => {
//     const cards = use(cardsPromise);

//     const [stack, setStack] = useState<Icard[]>([]);

//     // Add to Stack

//     const handleAddToStack = (card: Icard) => {
//         const alreadyAdded = stack.find((item) => item.id === card.id);

//         if (alreadyAdded) {
//             toast.warning(`${card.name} is already in your stack!`);
//             return;
//         }

//         setStack([...stack, card]);
//         toast.success(`${card.name} added to your stack!`);
//     };



//     // Remove single item------------------------------

//     const handleRemove = (id: number) => {
//         const removedCard = stack.find((item) => item.id === id);

//         setStack(stack.filter((item) => item.id !== id));

//         if (removedCard) {
//             toast.info(`${removedCard.name} removed from your stack!`);
//         }
//     };

//     // Remove All----------------------------------

//     const handleRemoveAll = () => {
//         setStack([]);

//         if (stack.length > 0) {
//             toast.info("All technologies removed!");
//         }
//     };

//     return (
//         <div className="bg ">

//             <section className="max-w-7xl mx-auto px-4 py-12">

//                 {/* Explore center name------------------------- */}

//                 <div className="text-center mb-10">
//                     <h2 className="text-3xl md:text-4xl font-bold">
//                         Explore Technologies
//                     </h2>

//                     <p className="text-gray-500 mt-3">
//                         Discover the technologies you can use to build your development stack.
//                     </p>
//                 </div>


//                 {/* Main function------------------------- */}
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//                     -
//                     {/* Technology Cards----------------------- */}

//                     <div className="lg:col-span-3 lg:col-start-1">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

//                             {cards.map((card) => {
//                                 const isAdded = stack.some((item) => item.id === card.id);

//                                 return (
//                                     <div
//                                         key={card.id}
//                                         className={`rounded-2xl border p-5 shadow-sm transition ${isAdded
//                                             ? "bg-gradient-to-br from-orange-100 via-pink-200 to-violet-200 border-pink-500"
//                                             : "bg-white border-pink-100 hover:shadow-lg"
//                                             }`}
//                                     >

//                                         {/* Top------------------------------ */}
//                                         <div className="flex items-center justify-between mb-5">

//                                             <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
//                                                 <img
//                                                     src={card.logo}
//                                                     alt={card.name}
//                                                     className="w-9 h-9 object-contain" />

//                                             </div>

//                                             <span className="rounded-full bg-purple-100 text-purple-600 px-3 py-1 text-xs font-semibold">
//                                                 {card.tag}
//                                             </span>

//                                         </div>

//                                         {/* Name------------------------------ */}
//                                         <h3 className="text-xl font-bold text-gray-900">
//                                             {card.name}
//                                         </h3>

//                                         {/* Description------------------------------- */}
//                                         <p className="text-sm text-gray-500 mt-2 min-h-[60px]">
//                                             {card.description}
//                                         </p>

//                                         {/* Category----------------------------------- */}
//                                         <div className="mt-4">
//                                             <span className=" inline-block rounded-full bg-orange-100 text-orange-600 px-3 py-1 text-xs font-medium">
//                                                 {card.category}
//                                             </span>
//                                         </div>

//                                         {/* Difficulty + Rating------------------------- */}
//                                         <div className="flex items-center justify-between mt-5">

//                                             <span className="text-sm text-gray-600">
//                                                 {card.level}
//                                             </span>

//                                             <span className="text-sm font-semibold">
//                                                 ⭐ {card.rating}
//                                             </span>

//                                         </div>

//                                         {/* Button--------------------------------------- */}
//                                         <button
//                                             onClick={() => handleAddToStack(card)}
//                                             disabled={isAdded}
//                                             className={`w-full mt-5 rounded-xl py-2.5 font-semibold transition ${isAdded
//                                                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                                                 : "bg-gray-900 text-white hover:bg-gray-700"
//                                                 }`}
//                                         >
//                                             {isAdded ? "✓ Added to Stack" : "Add to Stack"}
//                                         </button>

//                                     </div>
//                                 );
//                             })}

//                         </div>
//                     </div>

//                     {/* Your Stack---------------------------------- */}
//                     <aside className="lg:col-span-1 lg:col-start-4">
//                         <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

//                             {/* Stack Header-------------------------- */}
//                             <div className="mb-5">

//                                 <h2 className="text-xl font-bold">
//                                     Your Stack
//                                 </h2>

//                                 <p className="text-sm text-gray-500 mt-1">
//                                     {stack.length} Technology Selected
//                                 </p>

//                                 {stack.length > 0 && (
//                                     <button
//                                         onClick={handleRemoveAll}
//                                         className="w-full mt-4 bg-pink-300 hover:bg-red-600                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     00 text-white font-semibold py-2.5 rounded-xl transition duration-200"
//                                     >
//                                         Remove All
//                                     </button>
//                                 )}

//                             </div>

//                             {/* Empty State----------------------------- */}

//                             {stack.length === 0 ? (
//                                 <div className="text-center py-10">
//                                     <p className="text-gray-400">
//                                         Your stock is Empty
//                                     </p>

//                                     <p className="text-sm text-gray-400 mt-2">
//                                         Add technologies to build your stack.
//                                     </p>
//                                 </div>
//                             ) : (

//                                 // --------------------------------------------
//                                 /* Selected Technologies */
//                                 <div className="space-y-3">

//                                     {stack.map((item) => (
//                                         <div
//                                             key={item.id}
//                                             className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
//                                         >

//                                             <img
//                                                 src={item.logo}
//                                                 alt={item.name}
//                                                 className="w-9 h-9 object-contain"
//                                             />

//                                             <div className="flex-1 min-w-0">
//                                                 <h4 className="font-semibold text-sm truncate">
//                                                     {item.name}
//                                                 </h4>

//                                                 <p className="text-xs text-gray-500">
//                                                     {item.category}
//                                                 </p>
//                                             </div>

//                                             <button
//                                                 onClick={() => handleRemove(item.id)}
//                                                 className="text-gray-400 hover:text-red-500 text-lg"
//                                             >
//                                                 ✕
//                                             </button>

//                                         </div>
//                                     ))}

//                                 </div>
//                             )}

//                         </div>
//                     </aside>

//                 </div>
//             </section>
//         </div>
//     );
// };
// export default Cards;
