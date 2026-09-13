import { use, useState } from "react";
import type { Icard } from "../../types/cardtype";
import { toast } from "react-toastify";

interface CardsProps {
    cardsPromise: Promise<Icard[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
    const cards = use(cardsPromise);

    const [stack, setStack] = useState<Icard[]>([]);

    // Add to Stack

    const handleAddToStack = (card: Icard) => {
        const alreadyAdded = stack.find((item) => item.id === card.id);

        if (alreadyAdded) {
            toast.warning(`${card.name} is already in your stack!`);
            return;
        }

        setStack([...stack, card]);
        toast.success(`${card.name} added to your stack!`);
    };



    // Remove single item------------------------------

    const handleRemove = (id: number) => {
        const removedCard = stack.find((item) => item.id === id);

        setStack(stack.filter((item) => item.id !== id));

        if (removedCard) {
            toast.info(`${removedCard.name} removed from your stack!`);
        }
    };

    // Remove All----------------------------------

    const handleRemoveAll = () => {
        setStack([]);

        if (stack.length > 0) {
            toast.info("All technologies removed!");
        }
    };

   
};
export default Cards;
