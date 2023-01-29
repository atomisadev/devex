export default function Button({ props, children }: any) {
  return (
    <button
      className="bg-primary hover:bg-primaryLighter px-4 py-2 text-sm text-white font-medium rounded-md"
      {...props}
    >
      {children}
    </button>
  );
}
