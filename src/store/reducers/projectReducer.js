const initState = {
    projects: [
        { id: 1, title: 'title 1', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore amet error ullam earum praesentium quasi voluptate corrupti ratione, ex quibusdam eligendi rerum distinctio facilis veritatis pariatur alias eaque accusamus fugit?' },
        { id: 2, title: 'title 2', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore amet error ullam earum praesentium quasi voluptate corrupti ratione, ex quibusdam eligendi rerum distinctio facilis veritatis pariatur alias eaque accusamus fugit?' },
        { id: 3, title: 'title 3', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore amet error ullam earum praesentium quasi voluptate corrupti ratione, ex quibusdam eligendi rerum distinctio facilis veritatis pariatur alias eaque accusamus fugit?' }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
            console.log ('created project', action.project);
            return state;
        case  'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
        default: 
            console.log('DEFAULT ACTION');
            return state;
    } 
}

export default projectReducer;