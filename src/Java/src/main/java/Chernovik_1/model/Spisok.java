package Chernovik_1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Chernovik_1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Список
 */
@Entity(name = "IISChernovik_1Список")
@Table(schema = "public", name = "Список")
public class Spisok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @OneToMany(mappedBy = "spisok", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Spisokkk> spisokkks;


    public Spisok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}