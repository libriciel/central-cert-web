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

import {Injectable} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Injectable({
    providedIn: 'root'
})
export class KeystoreService {

    constructor(private deviceService: DeviceDetectorService) {
    }

    getSystem() {
        return this.deviceService.getDeviceInfo().os;
    }

    getNavigator() {
        return this.deviceService.getDeviceInfo().browser;
    }

    isCompatible() {
        return (this.getSystem() === 'Windows' && this.getNavigator() != 'Edge');
    }
}
