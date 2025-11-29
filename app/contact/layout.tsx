import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | STAR DIGITECH PRO',
  description: 'Get in touch with our digital marketing experts in New Delhi. Request a free consultation and discover how we can help grow your business.',
  openGraph: {
    title: 'Contact Us | STAR DIGITECH PRO',
    description: 'Get in touch with our digital marketing experts in New Delhi. Request a free consultation and discover how we can help grow your business.',
    url: 'https://stardigitechpro.vercel.app/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stardigitechpro.vercel.app/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
