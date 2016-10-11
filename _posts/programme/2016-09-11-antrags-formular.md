---
layout: article
title: Antragsformular
nav_title: Antragsformular
name: programme
category: programme
parent: Antrag auf Aufnahme
---

<form data-toggle="validator" data-disable="false" role="form" novalidate="true">

    <fieldset class="horizontal">
        <label>
            Anrede*
            <select class="form-control" required="" data-required-error="Füllen Sie dieses Feld aus.">
                <option>Herr</option>
                <option>Frau</option>
            </select>
        </label>
                
        <label>
            Vorname*
            <input type="text" class="form-control" id="firstName" placeholder="z.B. Max" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
        </label>

        <label>
            Nachname*
            <input type="text" class="form-control" id="lastName" placeholder="z.B. Mustermann" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
        </label>

        <label>
            Geburtsdatum*
            <input type="text" class="form-control" id="birthday" placeholder="z.B. 29.08.1981" required="" pattern="^\d{2}[./-]\d{2}[./-]\d{4}$" data-pattern-error="Bitte geben Sie Ihr Geburtsdatum im Format TT.MM.YYYY an." data-required-error="Füllen Sie dieses Feld aus." />
        </label> 

        <label>
            Geburtsort*
            <input type="text" class="form-control" id="birthLocation" placeholder="z.B. München" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
        </label>
                

        <label>
            Staatsangehörigkeit*
            <input type="text" class="form-control" id="nationality" placeholder="z.B. deutsch" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
        </label>
                
        <label>
            Straße*
            <input type="text" class="form-control" id="street" placeholder="z.B. Sendlingerstraße" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
        </label>

        <label>
            Hausnummer*
            <input type="text" class="form-control" id="street-number" placeholder="z.B. 25" required="" data-required-error="Füllen Sie dieses Feld aus." />
        </label>

        <label>
            PLZ*
            <input type="text" class="form-control" id="plz" placeholder="z.B. 80331" required="" data-required-error="Füllen Sie dieses Feld aus." pattern="^[0-9 ]*$" data-pattern-error="Es sind ausschließlich Zahlen erlaubt." />
        </label>
        
        <label>
            Ort*
            <input type="text" class="form-control" id="city" placeholder="z.B. München" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
        </label>

        <label>
            Tel.*
            <input type="text" class="form-control" id="phone" placeholder="z.B. 089 123456" required="" data-required-error="Füllen Sie dieses Feld aus." pattern="^[0-9 ]*$" data-pattern-error="Es sind ausschließlich Zahlen erlaubt." />
        </label>
        
        <label>
            Email*
            <input type="email" class="form-control" id="email" placeholder="z.B. max.mustermann@gmail.com" required="" data-required-error="Füllen Sie dieses Feld aus." data-error="Bitte geben Sie eine gültige Emailadresse ein." />
        </label>
    </fieldset>

    <h4>Anlagen</h4>

    <ul>
        <li><b>Nachweis der Hochschulzugangsberechtigung</b> durch die allgemeine
            Hochschulreife oder einschlägige fachgebundene Hochschulreife, die
            Fachhochschulreife oder die einschlägige fachgebundene Hochschulreife
            oder durch den Nachweis der erfolgreich bestandenen Meister- oder
            Technikerprüfung nach näherer Maßgabe von Art. 45 Abs. 1 Bayerisches
            Hochschulgesetz (BayHSchG) i. V. m. der Qualifikationsverordnung oder
            durch den Nachweis der sonstigen beruflichen Qualifizierung gemäß Art.
            45 Abs. 2 BayHSchG) i. V. m. der Qualifikationsverordnung
        </li>
        <li><b>Tabellarischer Lebenslauf</b> (mit Original-Unterschrift)</li>
        <li><b>Lichtbild</b></li>
        <li>Ausgefüllter <b>Immatrikulationsantrag</b></li>
    </ul>

    <fieldset class="horizontal">
        <label>
            Anlagen*
            <input type="file" multiple name="">
        </label>
    </fieldset>

    <fieldset class="pat-checklist">
        <label>
            <input type="checkbox" value="" class="" required="">
            <small class="form-no-highlight control-label">
                Hiermit erkenne ich die anliegenden <a class="form-link" href="#">Bedingungen</a> und die <a class="form-link" href="#">Prüfungsordnung</a> des Bachelor-Studiengangs Wirtschaftsingenieurwesen an und bestätige die Richtigkeit und Vollständigkeit meiner Angaben.
            </small>
        </label>
        <label>
            <input type="checkbox" value="" class="" required="">
            <small class="form-no-highlight control-label">
                Von der <a class="form-link" href="#">Widerrufsbelehrung</a> habe ich Kenntnis genommen.
            </small>
        </label>
    </fieldset>

    <p class="pat-message">
        Hiermit beantrage ich die Aufnahme in den von der UniBw M und der Hochschule Reutlingen gemeinsam getragenen Bachelor-Studiengang Wirtschaftsingenieurwesen (B. Eng.).
    </p>

    <p class="button-bar">
        <button type="submit" class="btn btn-primary">Formular absenden</button>
    </p>

</form>
