import AccountHeader from '@/components/account/account-header';

export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  );
}
