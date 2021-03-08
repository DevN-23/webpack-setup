import { useState } from 'react';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const eleventGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 5,
};

console.log(elvenShieldRecipe);
console.log(eleventGauntletsRecipe);

const Posts = () => {
  const [post, setPost] = useState({});
  return (
    <div>
      <h3>Current Post:</h3>
      <button onClick={() => setPost(elvenShieldRecipe)}>
        Elven Shield Post
      </button>
      <button onClick={() => setPost(eleventGauntletsRecipe)}>
        Elven Gauntlet Post
      </button>

      <ul>
        { Object.keys(post).map((material) => (
          <li key={material}>
            {material}: {post[material]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;