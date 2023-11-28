const Home = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 h-64">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-xl">꿀잠</h1>
        <h3>언제 잠을 자야 사람들이 충분한 숙면을 취할 수 있을까?</h3>
        <p>
          사람이 잠을 자게 되면 충분히 자는 것도 중요하지만, 잘 자는 것이
          중요합니다.
        </p>
        <p>
          꿀잠에서는 언제 자야 충분히 잘 수 있는지에 대해 계산하고 기록하며,
          <br />
          최적의 수면 시간대를 찾아냅니다.
        </p>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Home;
