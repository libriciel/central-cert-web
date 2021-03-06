/*
 * central cert web
 * Copyright (C) 2018-2019 Libriciel-SCOP
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    userName: string;

    constructor(private keycloakService: KeycloakService) {
    }

    async ngOnInit() {
        //récupère les informations de l'utilisateur Keycloak à l'initialisation
        await this.keycloakService.loadUserProfile().then(data => {
            this.userName = data.username;
        });
    }

    //déconnecte l'utilisateur
    logout() {
        this.keycloakService.logout();
    }

    onHover(element) {
        element.src = '/assets/images/logos/logo_centralcert_white_color.svg';
    }

    onQuitHover(element) {
        element.src = '/assets/images/logos/logo_centralcert_white.svg';
    }
}
