import React, {useState}  from 'react';

function ReactionSection({postReactionsData}) {

    const [selectedReaction, setSelectedReaction] = useState('');
    const [toggleSelection, setToggleSelection] = useState(false);

    function toggleReaction(selectedReaction) {
      setSelectedReaction(selectedReaction);
      setToggleSelection(!toggleSelection);
      console.log(toggleSelection);
    }

    return (
      <div className="grid-flow-row text-xs">
        {/* <ReactionButton reactionText="15 Good" />
        <ReactionButton reactionText="7 Awesome"/>
        <ReactionButton reactionText="5 Excellent"/>
        <ReactionButton reactionText="1 Bad"/> */}
        <button className={`reactionBtn bg-yellow-500 rounded-full py-2 px-3 mr-2 mt-1 ${(selectedReaction === 'good' && toggleSelection) ? "border-gray-500 border-2" : ""}`} onClick={() => toggleReaction('good')} >
        {postReactionsData['good']} 
          &nbsp;Good
        </button>
        <button className={`reactionBtn bg-yellow-400 rounded-full py-2 px-3 mr-2 mt-1 ${(selectedReaction === 'awesome' && toggleSelection) ? "border-gray-500 border-2" : ""}`} onClick={() => toggleReaction('awesome')}>
        {postReactionsData['awesome']} 
          &nbsp;Awesome
        </button>
        <button className={`reactionBtn bg-yellow-400 rounded-full py-2 px-3 mr-2 mt-1 ${(selectedReaction === 'excellent' && toggleSelection) ? "border-gray-500 border-2" : ""}`} onClick={() => toggleReaction('excellent')}>
        {postReactionsData['excellent']} 
          &nbsp;Excellent
        </button>
        <button className={`reactionBtn bg-yellow-400 rounded-full py-2 px-3 mr-2 mt-1 ${(selectedReaction === 'bad' && toggleSelection) ? "border-gray-500 border-2" : ""}`} onClick={() => toggleReaction('bad')}>
        {postReactionsData['bad']} 
          &nbsp;Bad
        </button>
      </div>
    );
  }

export default ReactionSection;