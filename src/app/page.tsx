import TaskList from "@/components/TaskList";

const Home = async ({}) => {
  return (
    <div className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-10 pb-10 sm:pb-20">
        Welcome to TaskMaster
      </h1>

      <div className="grid place-items-center">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
