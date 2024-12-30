# Leapfore-CTA-Section-Two-Blocks

Deze opdracht is een case vanuit het bedrijf Leapforce, genaamd "CTA Section - Two Blocks". Voor deze case heb ik een design ontvangen dat ik geprobeerd heb na te bouwen.

Ik heb SvelteKit gebruikt om de website te ontwikkelen. De teksten zijn bewerkbaar gemaakt door gebruik te maken van een JSON-bestand waarin de data is opgeslagen. Deze JSON-data heb ik geïmporteerd in de Svelte-pagina om zowel in de HTML als in de invoervelden weer te geven. Door gebruik te maken van bind-bindings in de invoervelden, zijn de teksten direct bewerkbaar.

Daarnaast heb ik een hamburger-menu geïmplementeerd dat gebruikers opties biedt om de teksten te kunnen aanpassen. Elk bewerkbaar tekstveld is voorzien van tooltips met constraints, zodat gebruikers geïnformeerd worden over de maximale lengte van titels, labels of tekst. Dit verbetert de gebruiksvriendelijkheid en voorkomt invoer die de opgegeven limieten overschrijdt.

![image](https://github.com/user-attachments/assets/f97d89fe-7f03-44e8-a454-8753918a5e6a)

De site heb ik online gepubliceerd met vercel.

![Schermafbeelding 2024-12-18 224827](https://github.com/user-attachments/assets/b8f2c976-d5bb-46b9-baee-0974f55d503d)

https://leapforce-cta-section-two-blocks.vercel.app/


User stories

• Je mag zelf kiezen welk framework etc. je gebruikt. Bij Leapforce gebruiken we HubSpot CMS Hub en Tailwind CSS of kiezen we voor WordPress met een custom thema in PHP en ACF

• Ik wil de sectie online kunnen bezoeken en de broncode in een GitHub repository willen beoordelen.

• Bekijk goed de verschillende pages in het design system voor de grid layouts en hover states etc.

• De tablet viewport is wat mij betreft optioneel.

• We maken onze websites zonder hard coded teksten. Alles moet door een marketeer / klant kunnen worden aangepast. Hiervoor maken we in HubSpot CMS of WordPress (ACF) custom velden aan. Ik zou graag willen dat jij nadenkt over de velden die we als developers kunnen voorstellen aan de projectmanager. Dit kan als eenvoudig tekstbestand worden toegevoegd aan de GitHub repository. Je hoeft hier geen rekening mee te houden in je code. Ik wil het volgende weten:

• Titel / label van het veld

• Optioneel of required

• Default value wanneer je als marketeer de sectie in de pagina sleept

• Tooltip / helptekst

• Constraints voor de input van de marketeer

• Voorbeeld van een module met custom velden:

## DOD(Defenition of done)
[x] Gekozen framework Sveltekit

[x] Site heeft een live link en code staat in github.

[x] Bekijk goed de verschillende pages in het design system voor de grid layouts en hover states etc.

[x] Heeft ook een tablet view

We maken onze websites zonder hard coded teksten. Alles moet door een marketeer / klant kunnen worden aangepast. Hiervoor maken we in HubSpot CMS of WordPress (ACF) custom velden aan. Ik zou graag willen dat jij nadenkt over de velden die we als developers kunnen voorstellen aan de projectmanager. Dit kan als eenvoudig tekstbestand worden toegevoegd aan de GitHub repository. Je hoeft hier geen rekening mee te houden in je code. Ik wil het volgende weten:

[x] Titel / label van het veld

[] Optioneel of required

[] Default value wanneer je als marketeer de sectie in de pagina sleept

[x] Tooltip / helptekst

[x] Constraints voor de input van de marketeer

![image](https://github.com/user-attachments/assets/884a18bf-d378-44f5-9244-7c607ddd63cf)


## Wat ik verder nog wil doen ?

* Grid layout voor desktop verder uitwerken.
* Afbeeldingen kunnen wijzigen met een input van `<input type="file">.`
* Directus of een ander headless CMS gebruiken om bewerkte teksten en afbeeldingen op te slaan of op te halen op basis van een specifieke ID.
* Secties kunnen slepen met behulp van een drag event.
* Styling perfectioneren.
* Code refactoren voor betere leesbaarheid en onderhoudbaarheid.
* De code verdelen in meerdere herbruikbare componenten.
* Optioneel of required meegeven
* Max length voor de invoer velden verder uitwerken
