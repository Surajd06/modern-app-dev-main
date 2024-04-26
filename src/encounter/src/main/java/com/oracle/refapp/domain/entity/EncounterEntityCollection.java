/*
 * Copyright (c) 2023 Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracl.com/licenses/upl/
 */
package com.oracle.refapp.domain.entity;

import io.micronaut.core.annotation.Introspected;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Introspected
@NoArgsConstructor
@AllArgsConstructor
public class EncounterEntityCollection {

  private List<EncounterEntity> encounterEntityList;
  private Integer nextPage;
}
