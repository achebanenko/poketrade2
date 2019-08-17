export function flatNested(input) {
  const isNested = Object.keys(input).every(key => {
    return input[key] && typeof input[key] === 'object';
  });
  if(!isNested) {
    console.error(`please check the argument: ${typeof input}`);
    return;
  }

  return Object
    .keys(input)
    .map(key => {
      Object
        .keys(input[key])
        .map(deepkey => {
          if(input[key][deepkey]['value'] > 0) { 
            input[key][deepkey]['projectId'] = key;
            input[key][deepkey]['sceneId'] = deepkey
          } else {
            delete input[key][deepkey];
          }
          return null;
        });
        return input[key];
    })
    .reduce((result, current) => {
      return [...result, ...Object.values(current) ];
    }, [])
    .sort((a,b) => {
      return b.value - a.value;
    });
}

export const input = {
    p1: {
      s1: {
        title: 'scene 1',
        description: 'description 1',
        value: 1,
      },
      s2: {
        title: 'scene 2',
        description: 'description 2',
        value: 32,
      },
      s3: {
        title: 'scene 3',
        description: 'description 3',
        value: 89,
      },
      s4: {
        title: 'scene 3',
        description: 'description 3',
        value: 0,
      },
    },
    p2: {
      s5: {
        title: 'scene 5',
        description: 'description 5',
        value: 0,
      },
      s6: {
        title: 'scene 6',
        description: 'description 6',
        value: 42,
      },
      s7: {
        title: 'scene 7',
        description: 'description 7',
        value: -9,
      },
    },
  };

export const output = [
  { projectId: 'p1', sceneId: 's1', value: 1, title: 'scene 1' },
  { projectId: 'p1', sceneId: 's2', value: 32, title: 'scene 2' },
  { projectId: 'p1', sceneId: 's3', value: 89, title: 'scene 3' },
  { projectId: 'p2', sceneId: 's6', value: 42, title: 'scene 6' },
];
