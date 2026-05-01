import { Spinner } from "@heroui/react";

const LoadingPage = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading.....
      <Spinner size="lg" />
    </div>
    );
};

export default LoadingPage;