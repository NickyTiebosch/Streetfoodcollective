# Contactformulier Setup - Eén keer, daarna automatisch!

Het contactformulier gebruikt **Web3Forms** - een gratis service die automatisch e-mails naar **info@streetfoodcollective.nl** verstuurt.

## Setup (één keer, 2 minuten)

1. **Ga naar https://web3forms.com/**
2. **Verifieer je e-mail:** Voer `info@streetfoodcollective.nl` in
3. **Check je inbox** en klik op de verificatielink
4. **Kopieer je Access Key** (ziet eruit als: `abc123-def456-ghi789`)
5. **Voeg toe aan `.env.local`:**
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=abc123-def456-ghi789
   ```
6. **Herstart de dev server** (Ctrl+C en dan `npm run dev`)

## Klaar! 🎉

Vanaf nu worden alle contactformulier-verzendingen **automatisch** naar **info@streetfoodcollective.nl** gestuurd - zowel lokaal als op de live site!

## Belangrijk

- De Access Key kan **publiek** zijn - dat is veilig!
- Werkt automatisch op **localhost** én op de **live site**
- **Gratis** - geen kosten
- **Geen configuratie** nodig na het toevoegen van de key

## Troubleshooting

- **E-mails komen niet aan?** Check of de Access Key correct is toegevoegd aan `.env.local`
- **Vergeet niet:** Herstart de dev server na het toevoegen van de key!
