interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Card({ children, className = "" }: CardProps) {
    return (
      <div className={`p-4 shadow-lg rounded-lg bg-white border border-gray-200 ${className}`}>
        {children}
      </div>
    );
  }