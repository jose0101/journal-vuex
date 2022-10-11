export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis natus quia consequuntur ea quibusdam tenetur expedita suscipit nisi dicta iste maxime aliquam, quis libero praesentium deserunt laborum quo rem",
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: "Fugiat ad eiusmod deserunt exercitation dolore fugiat cupidatat excepteur eu aliqua.",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Incididunt consequat tempor anim pariatur irure occaecat sint duis minim laboris esse incididunt non. Cupidatat voluptate ea aliquip aliqua excepteur. Incididunt nulla esse dolor consequat eiusmod dolor.",
            picture: null,
        },
    ]
})
