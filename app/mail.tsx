export default function MailTemplate({ name = 'Cliente' }: { name?: string }) {
  return `Hola ${name}, gracias por suscribirte a Flore C Detalles.`;
}
